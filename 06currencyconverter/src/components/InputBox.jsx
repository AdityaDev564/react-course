import { useId } from "react";

function InputBox({
    label,
    amount,
    className = "", 
    onAmountChange, 
    onCurrencyChange, 
    currencyOptions =[], 
    selectCurrency="usd", 
    amountDisable = false, 
    currencyDisable = false}) {
   

    const amountInputID = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputID}  className="text-black/40 mb-2 inline-block"> 
                    {label}
                </label>
                <input
                    id={amountInputID}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount==='0' ? "" : amount}
                    onChange={(e) => {
                        const inputValue = e.target.value.replace(/[^0-9]/g, '') ;
                        onAmountChange && onAmountChange(inputValue || 
                        '0')
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        )

                        )}

                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
