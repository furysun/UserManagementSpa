export class ValidateUtils {
    static alphaOnly(e) {
        let regex = new RegExp("^[a-zA-Z]+$");
        let str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }

        e.preventDefault();
        return false;
    };

    static numericOnly(e) {
        let regex = new RegExp("^[0-9]+$");
        let str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }

        e.preventDefault();
        return false;
    }
    static isEmpty(str){
        return str === null || str ==='';
    }
}