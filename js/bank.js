document.getElementById('btn-depodit').addEventListener('click', function(){
    
    const depositField = document.getElementById('deposit-field')
    const newDepoAmountStr = depositField.value
    const newDepoAmount = parseFloat(newDepoAmountStr)
    
    const depositTotalEl = document.getElementById('deposit-total')
    const prevDepositTotalstr = depositTotalEl.innerText
    const prevDepositTotal = parseFloat(prevDepositTotalstr)

    const currentDepositTotal = prevDepositTotal + newDepoAmount
    depositTotalEl.innerText = currentDepositTotal

    if( newDepoAmount == ''){
        alert("Please Enter valid amound")
    }
    depositField.value = ''

    const balanceTotalEle = document.getElementById('balance-total')
    const balanceTotalStr = balanceTotalEle.innerText
    const balanceTotal = parseFloat(balanceTotalStr)
    
    const newBalanceTotal = balanceTotal+ newDepoAmount
    balanceTotalEle.innerText = newBalanceTotal
})