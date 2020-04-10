import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { publicDecrypt } from 'crypto'

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price*100
    const publishableKey = 'pk_test_y3iNTpDtZ6QSGc2q81vgB8W900nEXJCRfo'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton