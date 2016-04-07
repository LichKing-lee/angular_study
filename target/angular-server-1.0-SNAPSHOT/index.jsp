<%--
  Created by IntelliJ IDEA.
  User: ChangYong
  Date: 2016. 4. 3.
  Time: 오후 3:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
    <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script>
        $(document).ready(function(){
            $("#call").on("click", function(){
                $.ajax({
                    url : "/asd.do",
                    dataType : "json",
                    success : function(data){
                        alert(data.hello);
                    },
                    error : function(){
                        alert("error");
                    }
                });
            });
        });
    </script>
</head>
<body>
<input type="button" id="call" value="call"/>
</body>
</html>
