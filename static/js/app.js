d3.json("../data/samples.json").then((Data) => {
    // console.log(Data.metadata);

    var selection = d3.select("#selDataset");
    var sampleselection = Data.names;
    sampleselection.forEach(sample => { 
        selection.append("option").text(sample).property("value", sample); 
    });

   
    var InitSample = Data.samples[0];  
    var InitName = Data.names[0];
    console.log (InitName)
    renderPlot(InitSample);
    DisplayMtd(InitName);

    var Values = Data.samples.map(sample => sample.sample_values);
    // console.log(Values);

    function Select(id) {
        d3.json("static/data/samples.json").then((Data) => { 
            data=Data.samples.filter(s => s.id == id)[0];
            buildPlot(data); 
            initID = Data.metadata.filter(md => md.id == id)[0];
            DisplayMtd(id); 
            console.log(data);
        });
    }

    function DisplayMtd(id) {
        d3.json("static/data/samples.json").then((Data) => {
            var meta = Data.metadata
            console.log(meta);
        
        mdID = meta.filter(md => md.id == id); 
        initSample = mdID[0];
        console.log(mdID);
        console.log(initSample);
        
        var Datadisplay = d3.select("#sample-metadata");
        Datadisplay.html(""); 
        Object.entries(initSample).forEach(([key, value]) => {
            Datadisplay.append("p").text(`${key}, ${value}`) 
        });    
        });

    }

    function renderPlot(sample) {
        var ids = sample.otu_ids;
        var labels = sample.otu_labels;
        var values1 =  sample.sample_values;
        
        var trace1 = {
            x: values1.slice(0,10).reverse(),  
            y: ids.slice(0,10).reverse().map(d => `OTU ${d}`),
            text: labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
        };
        
        var data = [trace1];
        var layout = {
            title: "Plot A: Top 10 OTUs in sample",
        };
        Plotly.newPlot("bar", data, layout);

        var trace2 = {
            x: values1,  
            text: labels,
            mode: "markers",
            marker: {
                size: values1,
                color: ids,
            }
        };
        data
        var data = [trace2];
        var layout = {
            title: "Plot B: Top 10 OTUs in Sample",
        };

        Plotly.newPlot("bubble", data, layout);
    }

})
