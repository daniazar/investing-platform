
// config file
class Config {
    public static user = {
        table : 'inv_users',
        user_id     :'user_id',      
        email       :'email',       
        firstname   :'firstname',       
        lastname    :'lastname',       
        birth_date  :'birth_date',       
        cuit        :'cuit',      
        funds       :'funds',      
        created     :'created'
    };
    public static person = {
        table: 'inv_persons',
        id: 'id',
        created: 'created',
        funds: 'funds',
        fullName: 'fullname'

    }

    public static auth = {
        clientID: 'lUFRfM74puqLxEopQbEM4H4qmmu65jhk',
        domain: 'daniazar.auth0.com'

    }
}

export default Config;

