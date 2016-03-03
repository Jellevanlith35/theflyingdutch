$(document).ready(function() {
    $('div[data-include]').each(function() {
        $(this).load( $(this).attr('data-include') + '.html', function(){$(this).trigger("create")});
    });

    // Database connection, I know it is not the safest way

    var connection = new ActiveXObject("adodb.connection");

    var connectionstring="Data Source=s05.winhost.com;Initial Catalog=DB_98078_codeservice;User ID=DB_98078_codeservice_user;Password=codeservice;Provider=SQLOLEDB";

    connection.Open(connectionstring);
    var rs = new ActiveXObject("ADODB.Recordset");

    rs.Open("SELECT * FROM Hulpmiddelen", connection);
    rs.MoveFirst
    while(!rs.eof)
    {
       alert(rs.fields(1));
       rs.movenext;
    }

    rs.close;
    connection.close;
});
