export function generateForm() {

  const results = ["W", "L", "D"]

  const form = []

  for (let i = 0; i < 5; i++) {

    const random =
      Math.floor(
        Math.random() * results.length
      )

    form.push(results[random])
  }

  return form
}