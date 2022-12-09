export const sipcalculator= (req, res) => {
    let { sipamount, sipduration, sipinterest } = req.body;
    sipinterest = sipinterest /12/ 100; // monthly interest
    sipduration = sipduration * 12; // monthly duration
    let sip = sipamount *(sipinterest+1)* (Math.pow((1 + sipinterest), sipduration) - 1) / sipinterest;
    let investmentAmount = sipamount * sipduration;
    let returnOninvestment = sip - investmentAmount;

    res.status(200).json({totalInvestment:investmentAmount, totalReturn: sip, returnOnInvestment:returnOninvestment});

}
