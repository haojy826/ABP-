$(function () {
    tableChart();
    showSum();
	function tableChart(){
		//var a=document.getElementById("tbody_data");
		var item="";
		//setInterval(function () {		    
			$.ajax({
			    url: "index.aspx/tableData",
			    type: "post",
			    dataType: "json",
			    contentType: "application/json;charest=utf-8",
			    success: function (data) {//data�Ǻ�̨���ص�arrayһά���飬�����������������ݱ������
			        if(data)
			        {
			            
			            $("#table1 #tbody_data tr").remove();//��tbody�����е��ж�ɾ�������ڱ����
			            $.each(data, function (i,d) {//��������data�����������顢DOM��json�ȣ�ȡ����ֱ�Ӹ�������ajax���ص�����;i�ǵ�ǰ��λ�ã�d�ǵ�ǰλ���ϵ�ֵ
			                for (var j = 0; j < d.length / 4; j++)
			                {
			                    
			                    item = "<tr><td>" + data.d[0 + j * 4] + "</td><td>" + data.d[1 + j * 4] + "</td><td>" + data.d[2 + j * 4] + "</td><td>" + data.d[3 + j * 4]+ "</td></tr>";
			                    $("#table1").append(item);
			                }
			              
			            });
			        }
			    },
			    error: function (errorMsg) {
			        alert("ͼ����������ʧ�ܣ�");
			    }
			});
		//}, 2000);
		
	}
	function showSum() {
	   // var b = document.getElementById("number");
	    var item1="";
	   // setInterval(function () {	        
	        $.ajax({
	            url: " index.aspx/gaugeData",
	            type: "post",
	            async: true,
	            dataType: "json",
	            contentType: "application/json;charest=utf-8",
	            success: function (data) {
	                if(data)
	                {
	                   
	                    item1 =data.d;
	                    $("#number").html("");
	                    $("#number").append(item1);//����д�µ�����	                      
	                }
	            },
	            error: function (errorMsg) {
	                alert("��������ʧ�ܣ�");
	            }
	        });
	   // }, 500);
	   
	}
	
});