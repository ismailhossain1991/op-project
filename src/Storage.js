class Storage{

   static has(key){

return localStorage.getItem(key) ? localStorage.getItem(key) : false;
    }

    static get(key){

        if(this.has(key)){
return JSON.parse(this.has(key));
        }else{
return 'No data found';
        }

    }

static set(key, data){

    let setData = [];

if( this.has(key) ){
setData = JSON.parse( this.has(key));

}

setData.push(data);
localStorage.setItem(key, JSON.stringify(setData));
}

}

export default Storage;