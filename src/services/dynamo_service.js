const { DynamoDBClient } = require("@aws-sdk/client-dynamodb")
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb")
const { GetCommand, PutCommand, ScanCommand } = require("@aws-sdk/lib-dynamodb");
const client = new DynamoDBClient()
const docClient = DynamoDBDocumentClient.from(client)
const CONTACT_TABLE = process.env.CONTACT_TABLE

async function listContacts() {
    const command = new ScanCommand({
        TableName: CONTACT_TABLE
    })

    const response = await docClient.send(command)
    return response.Items
}

async function getContact(email) {
    const command = new GetCommand({
        TableName: CONTACT_TABLE,
        Key: { email }
    })
    const response = await docClient.send(command)
    console.log('response', response.contact)
    return response.Item
}

async function saveOrUpdateContact({ email, name, message }) {
    const command = new PutCommand({
        TableName: CONTACT_TABLE,
        Item: { email, name, message }
    })
    await docClient.send(command)
}

module.exports = { listContacts, getContact, saveOrUpdateContact }