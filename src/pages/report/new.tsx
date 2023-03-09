import React from 'react'

export default function New() {

  return (
    <div>
      <form action="/api/report" method="post">
        <label htmlFor="reference">Reference:
          <input type="text" name="reference" id="reference" required />
        </label>
        <label htmlFor="client">Client:
          <input type="text" name="client" id="client" required />
        </label>
        <input type="submit" value="Create new report" />
      </form>
    </div>
  )
}
