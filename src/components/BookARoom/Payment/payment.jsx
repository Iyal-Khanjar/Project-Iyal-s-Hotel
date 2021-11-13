import { useState } from 'react/cjs/react.development';
import './payment.css'
const Payment = () => {
    const [showPaymentAccept, setShowPaymentAccept] = useState(false)

    const PaymentAccepted = () => {
        setShowPaymentAccept(true)
    }




    return (<div>
        {showPaymentAccept ? <div className='containerForPayment'>
            <p>Thank you we've received your payment</p>
        </div> :
            <div class="wrapper">
                <h2>Payment Form</h2>
                <form action="" method="post">

                    <h4>Account</h4>
                    <div class="input_group">
                        <div class="input_box">
                            <input type="text" placeholder="Full Name" required class="name" />
                            <i class="fa fa-user icon"></i>
                        </div>
                        <div class="input_box">
                            <input type="text" placeholder="Name on Card" required class="name" />
                            <i class="fa fa-user icon"></i>
                        </div>
                    </div>
                    <div class="input_group">
                        <div class="input_box">
                            <input type="email" placeholder="Email Address" required class="name" />
                            <i class="fa fa-envelope icon"></i>
                        </div>
                    </div>
                    <div class="input_group">
                        <div class="input_box">
                            <input type="text" placeholder="Address" required class="name" />
                            <i class="fa fa-map-marker icon" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="input_group">
                        <div class="input_box">
                            <input type="text" placeholder="City" required class="name" />
                            <i class="fa fa-institution icon"></i>
                        </div>
                    </div>

                    <div class="input_group">
                        <div class="input_box">
                            <h4>Date Of Birth</h4>
                            <input type="text" placeholder="DD" required class="dob" />
                            <input type="text" placeholder="MM" required class="dob" />
                            <input type="text" placeholder="YYYY" required class="dob" />
                        </div>
                        <div class="input_box">
                            <h4>Gender</h4>
                            <input type="radio" name="gender" class="radio" id="b1" checked />
                            <label for="b1">Male</label>
                            <input type="radio" name="gender" class="radio" id="b2" />
                            <label for="b2">Female</label>
                        </div>
                    </div>

                    <div class="input_group">
                        <div class="input_box">
                            <h4>Payment Details</h4>
                            <input type="radio" name="pay" class="radio" id="bc1" checked />
                            <label for="bc1"><span>
                                <i class="fa fa-cc-visa"></i>Credit Card</span></label>

                        </div>
                    </div>
                    <div class="input_group">
                        <div class="input_box">
                            <input type="tel" name="" class="name" placeholder="Card Number 1111-2222-3333-4444" required />
                            <i class="fa fa-credit-card icon"></i>
                        </div>
                    </div>
                    <div class="input_group">
                        <div class="input_box">
                            <input type="tel" name="" class="name" placeholder="Card CVC 632" required />
                            <i class="fa fa-user icon"></i>
                        </div>
                    </div>
                    <div class="input_group">
                        <div class="input_box">
                            <div class="input_box">
                                <input type="number" placeholder="Exp Month" required class="name" />
                                <i class="fa fa-calendar icon" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div class="input_box">
                            <input type="number" placeholder="Exp Year" required class="name" />
                            <i class="fa fa-calendar-o icon" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="input_group">
                        <div class="input_box">
                            <button type="submit" onClick={PaymentAccepted}>PAY NOW</button>
                        </div>
                    </div>

                </form>
            </div>}</div>);
}

export default Payment;