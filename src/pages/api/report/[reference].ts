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
  const { reference } = req.query
  if (!reference) {
    return res.status(400).send({ message: 'Missing parameter "reference"'})
  }
  
  switch (req.method) {
    /**
     * Retrieve a report using its reference
     * Expected GET parameters:
     * - reference: string
     */
    
    case 'GET':
      const result = await db.collection('report').findOne({ reference })
      return res.status(200).send(result)

    default:
      return res.status(405).send({ message: 'Method not allowed'})
  }
}
