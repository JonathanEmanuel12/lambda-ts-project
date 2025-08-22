const { sendContactEmail } = require('../services/email_service')
const { listContacts, getContact, saveOrUpdateContact } = require('../services/dynamo_service')

async function indexContacts(req, res) {
    try {
        const contacts = await listContacts()
        res.status(200).json(contacts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Could not retrieve user" })
    }
}

async function showContact(req, res) {
    try {
        const contact = await getContact(req.params.email)
        if (contact === null || contact === undefined) {
            res.status(404).json({ error: 'Contact not found' })
        }
        res.status(200).json(contact)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Could not retrieve user" })
    }
}

async function saveContact(req, res) {
    const { email, name, message } = req.body

    const contactDto = { email, name, message }
    for (const [key, value] of Object.entries(contactDto)) {
        if (typeof value !== "string" || value.trim() === "") {
            return res.status(422).json({ error: `${key} is required and must be a string` });
        }
    }

    try {
        await saveOrUpdateContact(contactDto)
        await sendContactEmail(contactDto)
        res.status(201).json({ email, name, message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Could not create user" })
    }
}

module.exports = { indexContacts, showContact, saveContact }