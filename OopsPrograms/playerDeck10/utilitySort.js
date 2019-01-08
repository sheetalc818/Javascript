
/******************************************************************************
* @Purpose : program for sorting an elements
* @author  : Sheetal Chaudhari
* @version : 1.30.1
* @since   : 08/01/2019
******************************************************************************/
module.exports = 
{

    sort: function(alphabet)
    {
        return function(a, b) 
        {
                var index_a = alphabet.indexOf(a[0]),
                index_b = alphabet.indexOf(b[0]);
        
                if (index_a == index_b) 
                {
                    // same first character, sort regular
                    if (a < b) 
                    {
                        return -1;
                    } 
                    else if (a > b) 
                    {
                        return 1;
                    }
                    return 0;
                } 
                else 
                {
                    return index_a - index_b;
                }
        }
    }
}
    
    