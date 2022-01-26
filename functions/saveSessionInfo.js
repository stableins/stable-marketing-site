const { MongoClient } = require("mongodb")

exports.handler = async (event, context, callback) => {
  const { session } = JSON.parse(event.body)
  const uri = process.env.MONGO_URI.replace(
    "<password>",
    process.env.MONGO_PASSWORD
  )
  const client = new MongoClient(uri)
  const statusCode = 200
  const status = "Successfully inserted session info"

  try {
    await client.connect()
    const database = client.db("marketing")
    const sessions = database.collection("sessions")
    session.createDate = new Date()
    await sessions.insertOne(session)
  } catch (e) {
    statusCode = 500
    status = e.message
    console.error(e)
  } finally {
    return {
      statusCode,
      body: JSON.stringify({ status }),
    }
  }
}
