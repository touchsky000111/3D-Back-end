const Stripe = require('stripe');
const config = require('../config');
const stripe = Stripe(config.STRIPE_SECRET_KEY);
const PaymentModelSchema = require('../model/payment.model')
const { getUserObjectId } = require('../lib/auth')
const UserModel = require('../model/users')
const SubscriptionModelSchema = require('../model/subscription.model')
const PaymentController = require("../controller/payment.controller")

module.exports = async (fastify) => {

    fastify.post('/create-payment-intent', async (req, res) => {
        try {
            const { amount, currency } = req.body;
            console.log("amount >>> ", amount)
            console.log("currency >>> ", currency)

            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
            });

            res.code(200).send({
                clientSecret: paymentIntent.client_secret,
            });
        } catch (error) {
            console.log("error >>> ", error)
            res.code(500).send({ error: error.message });
        }
    })

    fastify.post('/create-payment',
        {
            preHandler: fastify.authenticate
        },
        async (req, res) => {
            try {
                const { plan, amount, currency, type } = req.body;
                console.log("plan >>> ", plan)
                console.log("amount >>> ", amount)
                console.log("currency >>> ", currency)
                console.log("type >>> ", type)
                const accessToken = req.headers.authorization.split(" ")[1]
                console.log("accessToken >>> ", accessToken)
                const userId = await getUserObjectId(accessToken)
                console.log("userId >>> ", userId)
                const user = await UserModel.findOne({ _id: userId })

                const date = new Date()


                const newPayment = new PaymentModelSchema({
                    userId,
                    email: user.email,
                    type,
                    plan,
                    amount,
                    currency,
                    date,
                })

                await newPayment.save()


                const subscription = await SubscriptionModelSchema.findOne({ userId })

                console.log("subscriptionModel >>> ", subscription)

                if (subscription) {
                    await SubscriptionModelSchema.findOneAndUpdate({ userId }, { subscriptionType: plan })
                } else {

                    const newsubscriptionModel = new SubscriptionModelSchema({
                        userId,
                        email: user.email,
                        subscriptionType: plan,
                        date,
                    })
                    await newsubscriptionModel.save()
                }

                PaymentController.sendAlertToUser({
                    name: user.fullName,
                    amount: Number(amount) / 100,
                    email: user.email
                })


                return newPayment
            } catch (error) {
                res.code(500).send({ error: error.message });
            }
        })

    fastify.get('/latest-payment', {
        preHandler: fastify.authenticate
    }, async (req, res) => {
        try {
            const accessToken = req.headers.authorization.split(" ")[1]
            const userId = await getUserObjectId(accessToken)

            // Find the latest billing record by sorting by date in descending order and taking the first one
            const latestPayment = await PaymentModelSchema.findOne({ userId })
                .sort({ date: -1 })
                .limit(1);

            console.log("latestPayment >>> ", latestPayment)
            if (!latestPayment) {
                return res.code(200).send(false);
            }

            res.code(200).send({ payment: latestPayment });
        } catch (error) {
            console.error("Error fetching latest payment:", error);
            res.code(500).send({ error: error.message });
        }
    });



    fastify.post('/downgrade-subscription',
        {
            preHandler: fastify.authenticate
        },
        async (req, res) => {
            try {
                const accessToken = req.headers.authorization.split(" ")[1]
                const userId = await getUserObjectId(accessToken)


                const { plan } = req.body

                console.log("plan >>> ", plan)

                await SubscriptionModelSchema.findOneAndUpdate({ userId }, { subscriptionType: plan })

                res.code(200).send({ message: "Subscription downgraded successfully" });
            } catch (error) {
                res.code(500).send({ error: error.message });
            }
        })

}