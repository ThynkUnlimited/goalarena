export async function requestNotificationPermission() {
  if ("Notification" in window) {
    const permission =
      await Notification.requestPermission()

    return permission
  }
}

export function showNotification(title, body) {
  if (Notification.permission === "granted") {

    new Notification(title, {
      body,
      icon: "https://cdn-icons-png.flaticon.com/512/53/53283.png"
    })

  }
}