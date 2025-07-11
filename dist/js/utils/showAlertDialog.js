function showAlertDialog(title, message) {
  bootbox.hideAll();
  bootbox.alert({
    title: title,
    message: message,
    size: "medium",
    onEscape: true,
    backdrop: true,
    centerVertical: true,
  });
}
export default showAlertDialog;
