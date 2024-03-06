export const requestPermission = async () => {
  const premission = await Notification.requestPermission();
  return premission;
}