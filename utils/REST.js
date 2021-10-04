class REST {

    async getMainData(cbFunc){
        console.log("fetching data in progress...");
        let cur_time = new Date();
        let loc_month = cur_time.getMonth() + 1;
        let loc_year = cur_time.getFullYear();
/*
        if(loc_month < 10)
            loc_month = "0" + loc_month;
 */
        if(loc_year < 2000)
            loc_year += 2000;
        
        let uri = "https://cashview.000webhostapp.com/get_category_sum.php";
        
        let result = await fetch(uri,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"month":loc_month,
                                  "year":loc_year})
        });        

        let data = await result.json();
        // console.log(data);
        cbFunc(data);
    }

    async getGroups(direction, cbFunc){
        if(direction === undefined){
            direction = 0;
        }
        
        let uri = "http://cashview.000webhostapp.com/get_groups.php";
        let raw = await fetch(uri, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'type':direction})
        });
        let data = await raw.json();

        cbFunc(data);
    }

    async addTrans(transaction, cbFunc){    
        let url = "http://cashview.000webhostapp.com/create_transactions.php";
        console.log(transaction);
        let raw = await fetch(url, {
           method: "POST",
           headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
        });

        let data = raw.json();
        cbFunc(data);

    }

    async getTrans(direction, cbFunc){
        let uri = "http://cashview.000webhostapp.com/get_transactions.php";
        let cur_time = new Date();
        let loc_month = cur_time.getMonth() + 1;
        let loc_year = cur_time.getFullYear();
        let raw = await fetch(uri, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'direction': direction,
                'year': loc_year,
                'month': loc_month
            })
        });

        let data = await raw.json();

        cbFunc(data);
    }
}

module.exports.REST = new REST() ;