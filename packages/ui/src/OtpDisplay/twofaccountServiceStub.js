export default {
    get: function(id) {
        return new Promise(function(resolve) {
            resolve({
                data: {
                    otp_type : 'totp',
                    account : 'MyAccount',
                    service : 'MyService',
                    icon : 'iconfile.png',
                    secret : 'XXXX====',
                    digits : 6,
                    algorithm : 'sha1',
                    period : 30,
                    counter : null,
                    image : ''
                }
            })
        })
    },

    getOtpById : function(id) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve({
                    data: {
                        password : '000000',
                        otp_type : 'totp',
                        generated_at : 1747307643,
                        period : 30,
                        next_password : '111111'
                    }
                })
            }, 1500)
        })
    },

    getOtpByUri : function(uri) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve({
                    data: {
                        password : '222222',
                        otp_type : 'totp',
                        generated_at : 1747307643,
                        period : 30,
                        next_password : '333333'
                    }
                })
            }, 1500)
        })
    },

    getOtpByParams : function(otpauthParams) {
        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve({
                    data: {
                        password : '444444',
                        otp_type : 'totp',
                        generated_at : 1747307643,
                        period : 30,
                        next_password : '555555'
                    }
                })
            }, 1500)

        })
    },
    
}