function drawHTML() {
      var data = google.visualization.arrayToDataTable([
          ['HTML', 'fluency'],
          ['HTML', 90],
          ['', 10]
      ]);

      var options = {
          pieHole: 0.8,
          slices: {
            0: { color: 'lavender' },
            1: { color: 'transparent' }
          },
          legend: 'none',
          pieSliceTextStyle: {
          	color: 'black',
          	fontSize: 14
          },
          pieSliceText: 'label'
      };

      var chart = new google.visualization.PieChart(document.getElementById('html'));
      chart.draw(data, options);
    }

    function drawCSS() {
      var data = google.visualization.arrayToDataTable([
          ['CSS', 'fluency'],
          ['CSS', 80],
          ['', 20]
      ]);

      var options = {
          pieHole: 0.8,
          slices: {
            0: { color: 'lavender' },
            1: { color: 'transparent' }
          },
          legend: 'none',
          pieSliceTextStyle: {
          	color: 'black',
          	fontSize: 14
          },
          pieSliceText: 'label'
      };

      var chart = new google.visualization.PieChart(document.getElementById('css'));
      chart.draw(data, options);
    }
    
    function drawJS() {
      var data = google.visualization.arrayToDataTable([
          ['JS', 'fluency'],
          ['Js', 30],
          ['Jquery', 40],
          ['', 30]
      ]);

      var options = {
          pieHole: 0.8,
          slices: {
            0: { color: '#e6e6fa' },
            1: { color: '#B7B7FF' },
            2: { color: 'transparent' }
          },
          legend: 'none',
          pieSliceTextStyle: {
          	color: 'black',
          	fontSize: 14
          },
          pieSliceText: 'label'
      };

      var chart = new google.visualization.PieChart(document.getElementById('js'));
      chart.draw(data, options);
    }

    function drawCpp() {
      var data = google.visualization.arrayToDataTable([
          ['C/C++', 'fluency'],
          ['C/C++', 50],
          ['', 50]
      ]);

      var options = {
          pieHole: 0.8,
          slices: {
            0: { color: '#e6e6fa' },
            1: { color: 'transparent' }
          },
          legend: 'none',
          pieSliceTextStyle: {
          	color: 'black',
          	fontSize: 14
          },
          pieSliceText: 'label'
      };

      var chart = new google.visualization.PieChart(document.getElementById('cpp'));
      chart.draw(data, options);
    }

    function drawEngListen() {
      var data = google.visualization.arrayToDataTable([
          ['English', 'fluency'],
          ['Listen', 90],
          ['', 10]
      ]);

      var options = {
          pieHole: 0.8,
          slices: {
            0: { color: '#e6e6fa' },
            1: { color: 'transparent' }
          },
          legend: 'none',
          pieSliceTextStyle: {
          	color: 'black',
          	fontSize: 14
          },
          pieSliceText: 'label'
      };

      var chart = new google.visualization.PieChart(document.getElementById('listen'));
      chart.draw(data, options);
    }

    function drawEngSpeak() {
      var data = google.visualization.arrayToDataTable([
          ['English', 'fluency'],
          ['Speak', 75],
          ['', 25]
      ]);

      var options = {
          pieHole: 0.8,
          slices: {
            0: { color: '#e6e6fa' },
            1: { color: 'transparent' }
          },
          legend: 'none',
          pieSliceTextStyle: {
          	color: 'black',
          	fontSize: 14
          },
          pieSliceText: 'label'
      };

      var chart = new google.visualization.PieChart(document.getElementById('speak'));
      chart.draw(data, options);
    }

    function drawEngRead() {
      var data = google.visualization.arrayToDataTable([
          ['English', 'fluency'],
          ['Read', 70],
          ['', 30]
      ]);

      var options = {
          pieHole: 0.8,
          slices: {
            0: { color: '#e6e6fa' },
            1: { color: 'transparent' }
          },
          legend: 'none',
          pieSliceTextStyle: {
          	color: 'black',
          	fontSize: 14
          },
          pieSliceText: 'label'
      };

      var chart = new google.visualization.PieChart(document.getElementById('read'));
      chart.draw(data, options);
    }

    function drawEngWrite() {
      var data = google.visualization.arrayToDataTable([
          ['English', 'fluency'],
          ['Write', 60],
          ['', 40]
      ]);

      var options = {
          pieHole: 0.8,
          slices: {
            0: { color: '#e6e6fa' },
            1: { color: 'transparent' }
          },
          legend: 'none',
          pieSliceTextStyle: {
          	color: 'black',
          	fontSize: 14
          },
          pieSliceText: 'label'
      };

      var chart = new google.visualization.PieChart(document.getElementById('write'));
      chart.draw(data, options);
    }
    var sideactive= false;
    var curPos= [0, 0];
    var prevPos= [0, 0];
    var scrolled= [false, false];
    var section= [1, 1];
    function activate() {
    	var side= $(this).parent('.sides');
    	if (sideactive == false) {
    		side.addClass('active');
    		sideactive= true;
    	} else {
    		side.addClass('deactive');
    		setTimeout(function() {
    			side.removeClass('deactive');
    			side.removeClass('active');
    		}, 700);
    		sideactive= false;
    	}
    }
    function scrollin (container, slice, n, handle) {
      curPos[handle]= container.scrollTop();
      //console.log(curPos[handle], prevPos[handle], scrolled[handle], container);
      if((curPos[handle]-prevPos[handle]) > 0 && scrolled[handle] == false) {
        container.find(".nav.no" + section[handle] + ".show").toggleClass("show");
        if (section[handle] >= n) {
          section[handle]= n;
        } else {
          section[handle]++;
        }
        container.find(".nav.no" + section[handle]).toggleClass("show");
        var elm= container.children("." + slice + ".no" + section[handle]).offset().top;
        container.animate({
          scrollTop: curPos[handle]+elm
        });
        prevPos[handle]= curPos[handle]+elm;
        scrolled[handle]= true;
        setTimeout(function() {scrolled[handle]= false;}, 500);
      } else {
        if ((curPos[handle]-prevPos[handle]) < 0 && scrolled[handle] == false) {
          container.find(".nav.no" + section[handle] + ".show").toggleClass("show");
          if (section[handle] <= 1) {
            section[handle]= 1;
          } else {
            section[handle]--;
          }
          container.find(".nav.no" + section[handle]).toggleClass("show");
          var elm= container.children("." + slice + ".no" + section[handle]).offset().top;
          container.animate({
            scrollTop: curPos[handle]+elm
          });
          prevPos[handle]= curPos[handle]+elm;
          scrolled[handle]= true;
          setTimeout(function() {scrolled[handle]= false}, 500);
        } else {
          if (scrolled == false) {
            container.scrollTop(prevPos[handle]);
          }
        }
      }
    }
    function clickin(navno, container, slice, handle) {
      navno.parents(container).find(".nav.no" + section[handle] + ".show").toggleClass("show");
      section[handle]= navno.attr("no");
      navno.parent().toggleClass("show");
      var elm= navno.parents(container).find("." + slice + ".no"+ section[handle]).offset().top;
      navno.parents(container).animate({
        scrollTop: curPos[handle]+elm
      });
      prevPos[handle]= curPos[handle]+elm;
      scrolled[handle]= true;
      setTimeout(function() {scrolled[handle]= false}, 500);
    }
    $(function() {
    	$(".nav-item").on("click", activate);
      $(".vertical.close").on("click", activate);
      $("#slidesContainer .slides").on("scroll", function() {
        scrollin($(this), "project", 4, 0);
      });
      $("#cv .wrap").on("scroll", function() {
        scrollin($(this), "page", 7, 1);
      });
      $("#slidesContainer .nav .navNo").on("click", function() {
        clickin($(this), ".slides", "project", 0);
      });
      $("#cv .nav .navNo").on("click", function() {
        clickin($(this), ".wrap", "page", 1);
      });
    });