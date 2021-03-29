var api_url2 = '<%=ConfigurationManager.ConnectionStrings["api_url"] %>';



function dtConvFromJSON(data) {
    if (data == null) return '';
    var r = /\/Date\(([0-9]+)\)\//gi
  
    var matches = data.match(r);
    if (matches == null) return '';
    var result = matches.toString().substring(6, 19);
    var epochMilliseconds = result.replace(
        /^\/Date\(([0-9]+)([+-][0-9]{4})?\)\/$/,
        '$1');
    var b = new Date(parseInt(epochMilliseconds));
    var c = new Date(b.toString());
    var curr_date = c.getDate();
    var curr_month = c.getMonth() + 1;
    var curr_year = c.getFullYear();
    var curr_h = c.getHours();
    var curr_m = c.getMinutes();
    var curr_s = c.getSeconds();
    var curr_offset = c.getTimezoneOffset() / 60
    //var d = curr_date + '/' + curr_month.toString() + '/' + curr_year + " " + curr_h + ':' + curr_m + ':' + curr_s;
    var d = curr_date + '/' + curr_month.toString() + '/' + curr_year;
    return d;
}

$.prototype.MakeDataTableOuterSearch = function (parm, url, pageLength, ShowSearchBool, showpageLengthBool) {

    if (pageLength == "") { pageLength = 10; }
    else if (pageLength == null) { pageLength = 10; }
    if (ShowSearchBool != false) { ShowSearchBool = true; }
    if (showpageLengthBool != false) { showpageLengthBool = true; }

    this.dataTable({
        "language": {
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            },

            "search": "Content Search:",

            "entries": "Records"
        },


        buttons: [
            {
                extend: 'print', customize: function (win) {
                    $(win.document.body)
                        .css('font-size', '10pt')
                        .prepend(
                            '<img src="../Content/Loginlogo.png" style="position:absolute; top:0; left:0;" />'
                        );

                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }, className: 'btn dark btn-outline', exportOptions: { columns: ':visible' }
            },
            { extend: 'copy', className: 'btn red btn-outline', exportOptions: { columns: ':visible' } },
            { extend: 'pdf', className: 'btn green btn-outline', exportOptions: { columns: ':visible' } },
            { extend: 'excel', className: 'btn yellow btn-outline ', exportOptions: { columns: ':visible' } },
            { extend: 'colvis', className: 'btn dark btn-outline', text: 'Columns' }
        ],
        "order": [
            [1, 'asc']
        ],

        "lengthMenu": [
            [5, 10, 20, 50, 100, -1],
            [5, 10, 20, 50, 100, "All"] // change per page values here
        ],



        "searching": showpageLengthBool,
        "bLengthChange": showpageLengthBool,
        "pageLength": pageLength,
        "bJQueryUI": true,
        "bProcessing": true,
        "bServerSide": true,
        //"sAjaxSource": url,

        "ajax": {
            "type": "POST",
            "url": url,
            "contentType": 'application/json; charset=utf-8',
            'data': function (data) { return data = JSON.stringify(data); }
        },

        "columns": parm,




        "dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable
        //"dom": 'Bfrtip',
        "mRender": function (data, type, full) {
            return '<a href="#" onclick="alert(\'' + full[0] + '\');">Process</a>';
        }



    });

    var table = this.DataTable();

    $('#EmployeesList tbody').on('click', 'tr', function () {
        var data = table.row($(this)).data();
        window.open('/HumanResource/Employees/Main#' + data["Id"], '_blank');

    });

    table.columns().every(function () {
        var that = this;

        $('input.form-filter,select.form-filter', this.footer()).on('change', function (e) {
            //if (e.which == 13) {
            that
                .search(this.value)
                .draw();
            //}

        });
    });


}