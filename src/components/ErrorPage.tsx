import { isRouteErrorResponse, useRouteError } from 'react-router-dom'


export default function ErrorPage() {
  const error: unknown = useRouteError()

  if (isRouteErrorResponse(error)) {
    return <div className="flex">
      {error.status} t{error.statusText}

    </div>
  }
  return <p>{"Unknown Error"}</p>
}
