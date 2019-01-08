
class Stock
{
	Stock(stockName,stockPrice,stockNumber)
	{
		this.stockName=stockName;
		this.stockPrice=stockPrice;
		this.stockNumber=stockNumber;
	}
    getStockName()
    {
			return stockName;
	  }

    getStockPrice()
    {
			return stockPrice;
		}

    getStockWeight()
    {
			return stockWeight;
		}

    setStockName(stockName)
    {
			this.stockName=stockName;
		}

    setStockPrice(stockPrice)
    {
			this.stockPrice=stockPrice;
		}

    setStockWeight(stockWeight)
    {
			this.stockWeight=stockWeight;
		}

    toString()
    {
			return stockName+" "+stockPrice+" "+stockWeight+"  "+(stockPrice*stockWeight)+" "+"\n";
		}
}
module.exports = Stock