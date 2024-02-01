// Adding checkout to cart modal
<Button 
    floated='left' 
    size='big' 
    color='blue' 
    // call check out function
    onClick={goToCheckout}
>
    Checkout
</Button>

const goToCheckout = e => {
    // using history object in router to push customer to Check out page
    history.push(`/checkout/${props.cart.id}`)
    localStorage.setItem('cart-id', props.cart.id)
    props.setModalOpen(false)
    props.setCheckout(true)
}

// rendering checkout container
<PrivateRoute 
    component={CheckoutContainer}
    path={`/checkout/:id`} 
    setCheckout={setCheckout}
    setModalOpen={setModalOpen}
    setReceipt={setReceipt}
/>
// Get a checkout token
let cartId = props.match.params.id
    commerce.checkout.generateToken(cartId, { type: 'cart' })
    // Respond by setting Live Object in State
        .then(res => {
            setLiveObject(res.live)
            setTokenId(res.id)
        })
        // If incorrect input
        .catch(err => {
            console.log(err)
        })

    props.setCheckout(true)
