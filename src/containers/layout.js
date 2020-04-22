import React from "react"
import PropTypes from "prop-types"

import Header from "../components/header"
import PlanCard from "../components/PlanCard"
import "./layout.css"
import { requestPlans } from '../api'

class Layout extends React.Component {


  state = {
    plans: [],
    currency: 'EUR',
    duration: 'Monthly'
  }


  componentDidMount = async () => {
    const { currency } = this.state
    this.setState({
      plans: await requestPlans(currency)
    })
  }

  onChange = async(event, selector) => {
    selector === "currency"? 
    this.setState({
      [selector]: event.target.value,
      plans: await requestPlans(event.target.value)
    })
    :
    this.setState({
      [selector]: event.target.value
    })
  }

  render() {
    const { plans, currency, duration } = this.state;
    return (
      <>
        <Header siteTitle={'Plans & prices'} />
        <main>
          <div className="dropdowns-row">
            <div>
              <select value={duration} onChange={(e) => this.onChange(e, 'duration')}>
                <option value="Monthly">Monthly</option>
                <option value="Annualy">Annualy</option>
                <option value="2years">2years</option>
              </select>
            </div>
            <div>
              <select value={currency} onChange={(e) => this.onChange(e, 'currency')}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CHF">CHF</option>
              </select>
            </div>
          </div>
          <div className="plans-table">
            {plans.length && plans.map((plan, i) => {
              return (
                <PlanCard
                  key={i}
                  title={plan.Title}
                  storage={plan.MaxSpace}
                  users={plan.MaxMembers}
                  addresses={plan.MaxAddresses}
                  domains={plan.MaxDomains}
                  pricing={plan.Pricing}
                  currency={plan.Currency}
                  duration={duration}
                />
              )
            })}
          </div>
        </main>
      </>
    )
  }
}

export default Layout
