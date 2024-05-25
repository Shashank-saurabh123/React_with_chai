import React,{useId} from "react";

function InputBox({
    label,// 'from' or 'to'
    amount, // entered value
    onAmountChange, //(method) any change in amount leads to an API call
    onCurrencyChange, //(method) any change in currency leads to an API call
    currencyOptions=[], // we will loop over all currencies
    selectCurrency="usd",// bydefault selectCurrency is usd here
    amountDisable=false,// no need of this but it shows that user has access to change  amount
    currencyDisable=false,// user can change currency as well
    className="",
}){
     // 'useId' hook for generating unique IDs that can be passed to accessibility attributes
  const amountInputId = useId();
 
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

      <div className="w-1/2">

        {/* FROM or TO label ke liye */}
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
        {label}
        </label>

        <input   // input field hai ye
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Enter Amount Here"
          disabled={amountDisable}
          value={amount}
          // now our challenge ki amount change karne par component mein reflect ho
          // uske liye onchange ke upar ek event fire karte hai aur onAmountChange jo method bnaya tha
          //uske through information propagate karate hai ki amount change ho gya...

          onChange={(e) =>
            // ye ek checker hai jo check kar rha ki onAmountchange method exist karta hai ya nhi
            onAmountChange && onAmountChange(Number(e.target.value))
          }
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
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option> 
          ))}
          
         {/* First currency: In currencyOptions.map((currency) => ...), 
          it represents each individual item in the currencyOptions array as the map function iterates over the array.
        Second currency: In <option key={currency} value={currency}>, 
          it is used to set the key and value attributes of the <option> element.
          Third currency: Inside the <option> element (jo UI pe dikhega), 
              it is used to display the currency string as the visible text in the dropdown. */}
      
      
          {/* remember the 'key' in loops in react */}
        </select>
      </div>
    </div>
  );
}
export default InputBox;



