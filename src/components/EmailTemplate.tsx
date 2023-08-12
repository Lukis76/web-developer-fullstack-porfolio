import { FC } from 'react'

interface EmailTemplateProps {
    email: string
    body: string
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({ email, body }) => (
    <div>
        <h2>{'message de recruiter'}</h2>
        <h3>
            remitente {'<'}{email}{'>'}
        </h3>
        <br />
        <hr />
        <p>{body}</p>
    </div>
)
