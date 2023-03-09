import Report from "@/classes/report"
import Vulnerability from "@/classes/vulnerability"
import { NextApiRequest, NextApiResponse } from "next"
import useDb from "@/lib/mongodb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const report = new Report()
  report.vulnerabilities.push(new Vulnerability())
  report.vulnerabilities.push(new Vulnerability())

  const { error, db } = await useDb()
  if (error || !db) {
    return res.status(500).send({ message: error?.message })
  }
  
  switch (req.method) {
    case 'POST':
      /**
       * Create a new blank report
       * Expected POST body: {
       *  reference: string,
       *  client: string
       * }
       */
      if (!req.body) {
        return res.status(400).send({ message: 'Missing body with a report object'})
      }
      const mandatoryFields = ['reference', 'client']
      const missingFields = mandatoryFields.filter(k => !Object.keys(req.body).includes(k))
      if (missingFields.length > 0) {
        return res.status(400).send({ message: `Missing mandatory field(s): ${missingFields}`})
      }
      const report = new Report()
      report.client = req.body.client.toString()
      report.reference = req.body.reference.toString()
      // Send in database
      try {
        report.import(req.body)
        db.collection('report').insertOne(report)
      }
      catch (error) {
        return res.status(400).send({ message: `Failed to parse the report into a valid Report class instance: ${(error as Error).message}` })
      }
      return res.status(200).send({ message: 'Report successfully sent'})

    default:
      return res.status(405).send({ message: 'Method not allowed'})
  }
}
