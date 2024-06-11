anychart.onDocumentReady(function(){

    //setting the theme
    
    
    //creating the data
    var data = [
    {from: "Proposed TFL Properties", to: "Potential Retrofit Properties", weight: 50},
    {from: "Potential Retrofit Properties", to: "TFL Not Required At This Time", weight: 4},
    {from: "TFL Not Required At This Time", to: "Currently Turtle Friendly", weight: 4},
    {from: "Potential Retrofit Properties", to: "Didn't Participate in Retrofit Programme", weight: 19},
    {from: "Potential Retrofit Properties", to: "Participated in Retrofit Programme", weight: 27},
    {from: "Participated in Retrofit Programme", to: "Completed TFL Installation", weight: 19},
    {from: "Participated in Retrofit Programme", to: "Still In TFL Process", weight: 8},
    //{from: "Lights on Order", to: "TFL In Progress", weight: 2},
    //{from: "Installed", to: "Currently Not Turtle Friendly", weight: 9},
    {from: "Didn't Participate in Retrofit Programme", to: "Currently Not Turtle Friendly", weight: 18},
    {from: "Still In TFL Process", to: "TFL In Progress", weight: 8},
    {from: "Didn't Participate in Retrofit Programme", to: "Under Construction/Re-developing", weight: 1},
    //{from: "Under Construction", to: "TFL In Progress", weight: 1},
    
    {from: "Proposed TFL Properties", to: "New Builds with TFL Planning Conditions", weight: 58},
    {from: "New Builds with TFL Planning Conditions", to: "Under Construction/Re-developing", weight: 44},
    //{from: "Under Construction", to: "TFL In Progress", weight: 44},
    {from: "New Builds with TFL Planning Conditions", to: "Completed Developments", weight: 14},
    {from: "Completed Developments", to: "Currently Turtle Friendly", weight: 5},
    {from: "Completed Developments", to: "Currently Not Turtle Friendly", weight: 9},


    {from: "Proposed TFL Properties", to: "Voluntary Properties", weight: 6},
    {from: "Voluntary Properties", to: "Completed TFL Installation", weight: 2},
    {from: "Completed TFL Installation", to: "Currently Not Turtle Friendly", weight: 11},
    {from: "Completed TFL Installation", to: "Currently Turtle Friendly", weight: 10},
    {from: "Voluntary Properties", to: "Under Construction/Re-developing", weight: 1},
    {from: "Under Construction/Re-developing", to: "TFL In Progress", weight: 46},
    {from: "Voluntary Properties", to: "Currently Turtle Friendly", weight: 0},
    {from: "Voluntary Properties", to: "Currently Not Turtle Friendly", weight: 3}
   
    ];
   
   //calling the Sankey function
   var sankey_chart = anychart.sankey(data);
   
   // set the chart's padding
    sankey_chart.padding(20, 40);

    //Colour Palette
    sankey_chart.palette([
      '#B0C4DE',
      '#aa96b4',
      '#6e5a7d',
      '#D8BFD8',
      '#9ACD32',//4
      '#008080',//1
      '#8FBC8B',//3
      '#5F9EA0',//2
      '#FA8072',//3
      '#F08080',//2
      '#CD5C5C',//1
      '#F4A460',//3
      '#FFA07A',//2
      '#E9967A'//1
      ]);


   //customizing the width of the nodes and padding between nodes
   //sankey_chart.nodeWidth("50%");
   sankey_chart.nodeWidth("70%");
   sankey_chart.nodePadding(40);

   //Customise Nodes
   /*--var node = sankey_chart.node();
   node.enabled(true);
   node.labels().height(30)
   node.labels().width(30)
   node.labels().fontFamily('Tahoma')
   node.labels().fontSize(14)
   node.wordWrap('break-word')--*/

   sankey_chart.node().normal().labels().fontSize(12);
   sankey_chart.node().normal().labels().fontFamily('Tahoma');
   sankey_chart.node().normal().labels().position("center-middle")
   sankey_chart.node().labels().useHtml(true);
   sankey_chart
     .node()
     .labels()
     .format("<span style='font-weight:bold; maxwidth: 50px; oversizedBehavior: wrap; font-family:Tahoma'>{%name}</span><br>{%value}");

  /* sankey_chart.node().normal().labels().fontSize(18);
   sankey_chart.node().normal().labels().fontFamily('Tahoma');
   sankey_chart.node().normal().labels().position("center-middle")
   sankey_chart.node().labels().useHtml(true);
   sankey_chart
     .node()
     .labels()
     .format("<span style='font-weight:bold; font-family:Tahoma'>{%name}</span><br>{%value}"); */

   //Customise Links
   sankey_chart.flow({
    normal: {
      fill: function () {
        return anychart.color.lighten(this.sourceColor, 0.2) + " " + 0.5;
      }
    },
    hovered: {
      fill: function () {
        return this.sourceColor + " " + 0.9;
      }
    }
  });

  //Customise Tooltips
  //sankey_chart.node().tooltip().anchor('center-bottom')
  sankey_chart.node().tooltip().background().fill("#000000")
  sankey_chart.node().tooltip().fontFamily('Tahoma')
  sankey_chart.node().tooltip().fontSize(12)
  sankey_chart.node().tooltip().title().fontSize(12)
  sankey_chart.node().tooltip().title().fontDecoration("bold")

 //sankey_chart.flow().tooltip().anchor('center-bottom')
  sankey_chart.flow().tooltip().background().fill("#000000")
  sankey_chart.flow().tooltip().fontFamily('Tahoma')
  sankey_chart.flow().tooltip().fontSize(12)
  sankey_chart.flow().tooltip().title().fontSize(12)
  sankey_chart.flow().tooltip().title().fontDecoration("bold")

  //setting the chart title
  var title = sankey_chart.title();
  title.enabled(true);
  title.enabled(true);
  title.width(700);
  title.height(150);
  title.useHtml(true);
  title.text(
    '<span style = "color: #000000; font-weight:bold; font-size:50px; font-family:Tahoma">Fate of Turtle Friendly Lighting Properties</span>'
  );
   
    //Sample title using word wrap
   /*-- var title = sankey_chart.title();
    title.enabled(true);
    title.text('Set word-wrap mode. This title contains averyveryveryveryveryverylongword');
    title.width(200);
    title.height(200);

    // Set word-wrap mode.
    title.wordWrap('break-word');--*/

   //setting the container id
   sankey_chart.container("container");

   //initiating drawing the Sankey diagram
   sankey_chart.draw();
   
   });