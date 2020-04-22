import React from "react"
import Button from './button'
import TextLine from './textLine'

const PlanCard = ({ title, storage, users, addresses, domains, pricing, currency, duration }) => {
    return (
        <div className="plan-card">
            <h3>{title}</h3>
            <div>
                <div className="price-tag">
                    <p className="smaller-text">{currency}
                        <strong className="price"> {duration === "Monthly" ? pricing[1]
                            :
                            (duration === "Annualy" ? Math.round(pricing[12] / 12)
                                :
                                (pricing[24] ? Math.round(pricing[24]/24)
                                    :
                                    (pricing[12]*2)/12 ))
                        }</strong>
                        /mo</p>
                </div>
                <p style={{ whiteSpace: 'nowrap', fontSize: '14px' }}>{`billed as ${currency} ${duration === 'Monthly' ?
                    pricing[1] * 12
                    :
                    (duration === "Annualy" ?
                        pricing[12] :
                        (pricing[24] ? Math.round(pricing[24])
                            :
                            pricing[12]*2)
                    )
                    } per year`}</p>
            </div>
            <p style={{ textAlign: 'center', margin: '40px auto 20px auto' }}>{'Hard coded description text about the plan'}</p>
            <div>
                <TextLine text={`${storage ? `${storage / 1073741824}GB` : 'Unlimited'} storage`} />
                <TextLine text={`${users ? users : 'Unlimited'} users`} />
                <TextLine text={`${addresses ? addresses : 'Unlimited'} addresses`} />
                <TextLine text={domains ? `Supports ${domains} domain${domains > 1 ? 's' : ''}` : 'No domain support'} />
            </div>
            <Button label={'Select'} onPress={() => console.log('further service function goes here')} />
        </div>
    )
}

export default PlanCard