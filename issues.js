/**
 * jsonデータを読みこみ、table要素を出力 
 */
function clickButton(){
    let text = document.getElementById("input").value;
    const element = createTable(text);
}

/**
 * jsonデータを読みこみ、tableのheader要素を出力 
 */
function createTableHeader(headerColumnNames){
    let columnNames = headerColumnNames;

    const headerRecord = document.createElement("tr");
    for(let i =0;i<columnNames.length;i++){
        const columnElement =document.createElement("th");
        columnElement.innerText=columnNames[i];
        headerRecord.appendChild(columnElement);
    }
    return headerRecord
}

function createTableRecord(records){
    const tableBody = document.createElement("tbody")
    for(let i =0;i<records.length;i++){
        const recordElement =document.createElement("tr");
        
        for(let j =0;j<records[i].length;j++){
            let record =records[i];
            const columnElement =document.createElement("td");
            columnElement.innerText=record[j];
            recordElement.appendChild(columnElement);
        }
        tableBody.appendChild(recordElement);
    }
    return tableBody;
}

function exportCSV(headers,body){
    // インプットパラメーターの型チェック
    if(!(headers instanceof Array
        && body instanceof Array)){
        return;
    }    
    // インプットパラメーターの型チェック
    if(!(body[0] instanceof Array)){
        return;
    }
    // インプットパラメーターのバリデーション
    if(headers.length<1){
        return;
    }
    // インプットパラメーターのバリデーション
    if(body.length<1){
        return;
    }
    // インプットパラメーターのバリデーション
    if(body[0].length<1){
        return;
    }
    

    // csv化可能文字列であることを検証
    for(let i =0;i<headers.length;i++){
        if(headers[i].toString().indexOf(",")!=-1){
            console.log("データに「,」が含まれているためファイル出力できません(header,"+i+1+")")
            return;
        }
    }
    // csv化可能文字列であることを検証
    for(let i =0;i<body.length;i++){
        let record = body[i];
        if(headers.length != record.length){
            return;
        }
        for(let j=0;j<record.length;j++){
            if(record[j].toString().indexOf(",")!=-1){
                console.log("データに「,」が含まれているためファイル出力できません(record,"+(i+1)+"行目"+(j+1)+"列目)")
                return;
            }
        }
    }
    
    console.log(headers);
}

function createTable(text){
    const element = document.createElement("table");
    let parsedText ;
    try{
        parsedText =JSON.parse(text);
    }catch{
        console.log("can't parse to JSON");
        return;
    }
    // ヘッダーの生成
    let headers = [];
    parsedText.forEach(element => {
        for(let name in element){
            if(!headers.includes(name)){
             headers.push(name);
            }
        }
    });
 
    // レコードの生成
    let records = [];
    parsedText.forEach(element => {
        let record =[];
        for(let i =0;i<headers.length;i++){
            record.push(element[headers[i]]);
        }
        records.push(record);
    });

    // テーブル要素へ追加し、画面に出力する
    element.style.whiteSpace="nowrap";
    element.style.textOverflow="ellipsis";
    element.border="1";
    element.appendChild(createTableHeader(headers));
    element.appendChild(createTableRecord(records));
    document.getElementById("output").appendChild(element);
    if(document.getElementsByTagName("table").length>1){
        document.getElementsByTagName("table").item(1).remove();
    }
    exportCSV(headers,records);
}

itemX=0;
itemY=0;
itemXUP=true;
itemYUP=true;

function moveItem(){
    const item = document.getElementById("item");
    let flg =Math.floor(Math.random())%2;
    if(flg==1){
        itemX=itemX+10;
    }else{
        itemX=itemX-10;
    }

    if(itemX<0){
        itemX=itemX*-1;
    }

    if(itemX>100){
        itemX=itemX-100;
    }

    if(flg==1){
        itemY=itemY+10;
    }else{
        itemY=itemY-10;
    }

    if(itemY<0){
        itemY=itemY*-1;
    }
    
    if(itemY>100){
        itemY=itemY-100;
    }
    item.style.top=itemX+"px";
    item.style.left=itemY+"px";
}