<template>
    <div>
        <div class="tui-datepicker-input tui-datetime-input tui-has-focus">
            <input type="text" id="tui-date-picker-target" aria-label="Date-Time">
            <span class="tui-ico-date"></span>
        </div>
        <div id="tui-date-picker-container" style="margin-top: -1px;"></div>
    </div>
</template>

<script>
import DatePicker from 'tui-date-picker';
var container = document.getElementById('tui-date-picker-container');
var target = document.getElementById('tui-date-picker-target');
export default {
    moutned(){
        var instance = new DatePicker(container, {
            showAlways: true,
            date: new Date(),
            input: {
                element: target,
                format: 'yyyy-MM-dd'
            }
        });

        instance.getDate();
    }
}

</script>