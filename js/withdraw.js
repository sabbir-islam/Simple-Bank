document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field')
    const preWithdrawStr = withdrawField.value
    const preWithdraw = parseFloat(preWithdrawStr)

    const withdrawTotalEl = document.getElementById('withdraw-total')
    const preWithdrawTotalStr = withdrawTotalEl.innerText
    const preWithdrawTotal = parseFloat(preWithdrawTotalStr)
    const newWithdrawTotal = preWithdraw + preWithdrawTotal
    
    withdrawTotalEl.innerText = newWithdrawTotal
    
    if( withdrawField == ''){
        alert("Please Enter valid amound")
    }
    withdrawField.value = ''

    const balanceTotalEle = document.getElementById('balance-total')
    const balanceTotalStr = balanceTotalEle.innerText
    const balanceTotal = parseFloat(balanceTotalStr)

    const newBalanceTotal = balanceTotal - preWithdraw
    balanceTotalEle.innerText = newBalanceTotal

})