webpackJsonp([17],{U5Fh:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("Dd8w"),n=i.n(e),o=i("cI2h"),s=i("tHiA"),r=(i("lqDr"),i("fuIb")),l=i("haSL"),c=i("PJh5"),d=i.n(c);var p={components:{appDeleteConfirmation:s.a,appTransactionTable:r.a,appTransactionDetailDialog:l.a},data:function(){return{total_profit:0,transactions:[],products:[],loading:!1,textMap:{update:"Edit",create:"Create"},selectedDate:[],windowWidth:window.innerWidth,transactionDetailDialog:{visible:!1,transaction:{}}}},methods:{getReportPeriodic:function(){var t=this;console.log("FETCH report periodic ..."),this.loading=!0;var a={start_date:this.selectedDate[0],end_date:this.selectedDate[1]};this.$store.dispatch("report/GenerateReportPeriodic",a).then(function(a){var i=a.data;i.messages,i.status_code,i.data.report;t.total_profit=i.data.report.total_profit,t.transactions=i.data.report.transactions,t.loading=!1})},makeDialogResponsive:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.a.sm,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.a.md;this.windowWidth<990?this.formDialog=n()({},this.formDialog,{dialog:t}):this.formDialog=n()({},this.formDialog,{dialog:a})},openTransactionDetailDialog:function(t){console.log("Open transaction detail dialog"),this.transactionDetailDialog=n()({},this.transactionDetailDialog,{transaction:this.transactions.filter(function(a){return a.transaction_id===t})[0]}),this.transactionDetailDialog.visible=!0,console.log("transaction => ",this.transactionDetailDialog.transaction)},closeTransactionDetailDialog:function(){this.transactionDetailDialog.visible=!1}},watch:{windowWidth:function(t,a){this.makeDialogResponsive()}},created:function(){var t,a,i,e,n;this.selectedDate=(t=new Date,a=t.getFullYear(),i=t.getMonth(),e=new Date(a,i,1),n=new Date(a,i+1,0),[e=d()(e).format(),n=d()(n).format()]),this.getReportPeriodic()},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("resize",function(a){t.windowWidth=window.innerWidth})})}},g={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"filter-container"},[i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{sm:24,md:12}},[t._v("\n        Keuntungan: "),i("span",{staticStyle:{"font-size":"24pt"}},[t._v(t._s(t._f("toIdr")(t.total_profit)))])]),t._v(" "),i("el-col",{attrs:{sm:24,md:12}},[t._v("\n        Periode:\n        "),i("el-date-picker",{staticStyle:{width:"80%"},attrs:{type:"daterange","range-separator":"To",format:"dd-MM-yyyy","value-format":"yyyy-MM-ddTHH:mm:ss+07:00","start-placeholder":"Start date","end-placeholder":"End date"},on:{change:t.getReportPeriodic},model:{value:t.selectedDate,callback:function(a){t.selectedDate=a},expression:"selectedDate"}})],1)],1)],1),t._v(" "),i("div",{staticStyle:{"margin-bottom":"10px"}}),t._v(" "),i("div",{staticClass:"table-container"},[i("app-transaction-table",{attrs:{transactions:t.transactions,loading:t.loading,onViewBtnClicked:t.openTransactionDetailDialog}})],1),t._v(" "),i("app-transaction-detail-dialog",{attrs:{visible:t.transactionDetailDialog.visible,transaction:t.transactionDetailDialog.transaction},on:{closeDialog:function(a){t.transactionDetailDialog.visible=!1}}})],1)},staticRenderFns:[]},D=i("VU/8")(p,g,!1,null,null,null);a.default=D.exports}});
//# sourceMappingURL=17.b7b2753baaf293aecd71.js.map