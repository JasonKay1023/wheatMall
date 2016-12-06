/**
 * Created by Kevin on 16/12/5.
 */
$(function () {
   function removeTick() {
      var aInput = $('#signUpForm').find('input');
      for (var i=0; i<aInput.length; i++){
         if ( aInput.eq(i).attr('class') == 'error'){
            aInput.eq(i).next('.tick').remove();
            // console.log(aInput.eq(i).attr('class'));//测试
         }
      }
   }
   if ($('#signUpForm').validate){
       timer = setInterval(removeTick,100);
   }else{
      clearInterval(timer);
   }

   $.validator.addMethod('isMobile',function (value, element) {
      var length = value.length;
      var mobile = /^(13\d{9})|(18\d{9})|(14\d{9})|(17\d{9})|(15\d{9})$/;
      return this.optional(element)||(length == 11 && mobile.test(value));
   },'手机号码格式有误，请重新输入');

   $('#signUpForm').validate({
      debug: true,
      onkeyup: false,
      submitHandler: function (form) {
         alert('提交事件');
         form.submit();
      },
      success: function (label) {
         label.prev('.tick').remove();
         if (label.siblings('input').attr('type') != 'checkbox'){
            var oTick = $('<a></a>').addClass('tick');
            label.before(oTick);
         }
      },
      rules:{
         username:{
            required: true,
            minlength: 4
         },
         email:{
            required: true,
            email: true
         },
         phone:{
            required: true,
            isMobile: true
         },
         password:{
            required: true,
            rangelength: [6, 16]
         },
         confirm_password:{
            required: true,
            equalTo: "#password"
         },
         agree:{
            required: true
         },
         usernameLogin:{
            required: true,
            minlength:4
         },
         passwordLogin:{
            required: true,
            rangelength:[6,16]
         }
      },

      messages:{
         username:{
            required: "请填写用户名",
            minlength: "用户名不少于四个字符"
         },
         email:{
            required: "请填写邮箱",
            email: "邮箱格式有误，请重新输入"
         },
         phone:{
            required: "请填写手机号码"
         },
         password:{
            required: "请填写密码",
            rangelength: "密码不少于6位，最多16位"
         },
         confirm_password:{
            required: "请确认密码",
            equalTo: "两次输入密码不一致，请重新输入"
         },
         agree:{
            required: "您未阅读该条款"
         },
         usernameLogin:{
            required: "请填写用户名",
            minlength:"输入格式有误，请重新输入"
         },
         passwordLogin:{
            required: "请填写密码",
            rangelength:"输入格式有误，请重新输入"
         }
      },
   });
});