var indexFieldToAttachment = 0;
var indexIds = 0;
init();

//Empty Model After Close
$('.modal').on('hidden.bs.modal', function () {
    for (let input of $('.modal-content').find('input')) {
        $(input).val('');
    }
    for (let textarea of $('.modal-content').find('textarea')) {
        $(textarea).val('');
    }
});

function init() {
    $("table:not(.skip-but)").each(function () {
        console.log($(this).attr("id"));
        if ($(this).attr("id") == undefined || $(this).attr("id") == "" || $(this).attr("id") == null) {
            $(this).attr(`id`, `id${indexIds++}`)
        }
        var tableId = $(this).attr("id");
        $(`#${tableId}`).before(`<div class="row">
            <div class="col-sm-11"></div>
            <div class="col-sm-1">
            <div class="dropdown w-100">
                                                    <button class="btn btn-outline-primary w-100 text-black dropdown-toggle" type="button" id="dropdownMenuButton${tableId}" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                        <i class="icofont-settings"></i>
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton${tableId}">
                                                        <li id="columnsChecker${tableId}">

                                                        </li>
                                                    </ul>
                                                </div>
            </div>
        </div>`);

        const table = $(`#${tableId}`);

        var getStore = localStorage.getItem(tableId);
        if (getStore) {
            getStore = getStore.split(',');
        }
        var promises = [];
        table.find('thead th').each(function (index, data) {
            if (getStore) {
                $(this).attr("data-Checker", (getStore[index] == "true" ? "true" : "false"));
                checker = getStore[index] == "true" ? "checked" : "";
            } else {
                $(this).attr("data-Checker", "true");
            }
            promises.push(data);
        });
        populateColumnSelect(tableId);
    });
    
}
function AddFieldToAttachment() {
    $("#addfield").append(`<div class="col-md-6">
                               <input type="text" class="form-control" placeholder="عنوان المتغير" id="fieldKey${indexFieldToAttachment}">
                           </div>
                           <div class="col-md-6">
                               <input type="text" class="form-control" placeholder="قيمة المتغيير" id="fieldValue${indexFieldToAttachment++}">
                           </div>`)
}

function populateColumnSelect(tableId) {
    let indexColumns = 0;
    const table = $(`#${tableId}`);
    const selectElement = $(`#columnsChecker${tableId}`);
    var getStore = localStorage.getItem(tableId);
    if (getStore) {
        getStore = getStore.split(',');
    }
    table.find('thead th').each(function (index, data) {
        var checker = "";
        const headerText = $(this).text();
        if (getStore) {
            checker = getStore[index] == "true" ? "checked" : "";
        } else {
            checker = $(this).attr('data-Checker') == "true" ? "checked" : "";
        }
        const option = `<a class="dropdown-item" href="#">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" onchange="toggleColumnVisibility(${indexColumns},this,'${tableId}')" value="" id="indexColumns${indexColumns}${tableId}" ${checker}  />
                                                    <label class="form-check-label" for="indexColumns${indexColumns}${tableId}">${headerText}</label>
                                                </div>
                                            </a>`;
        if (checker != "checked") {
            $(this).hide();
            table.find(`tbody tr > *:nth-child(${(indexColumns + 1)})`).each(function () {
                $(this).hide();
            });
        }
        indexColumns++;
        selectElement.append(option);
    });
}

// Function to toggle column visibility based on selected checkboxes
function toggleColumnVisibility(th_Index, element, tableId) {

    const table = $(`#${tableId}`);
    if ($(element).prop('checked') == true) {
        $(table.find('thead th')[th_Index]).show();
        $(table.find('thead th')[th_Index]).attr('data-Checker', true);
        table.find(`tbody tr > *:nth-child(${(th_Index + 1)})`).each(function () {
            $(this).show();
        });
    } else {
        $(table.find('thead th')[th_Index]).hide();
        $(table.find('thead th')[th_Index]).attr('data-Checker', false);
        table.find(`tbody tr > *:nth-child(${(th_Index + 1)})`).each(function () {
            $(this).hide();
        });
    }
    var arr_attr = [];
    for (item_th of table.find('thead th')) {
        arr_attr.push($(item_th).attr('data-Checker'));
    }
    localStorage.setItem(tableId, arr_attr);
}
