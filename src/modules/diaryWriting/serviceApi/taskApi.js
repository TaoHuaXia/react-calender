/*根据条件查询任务列表*/

export const taskInfoMany = (date)=>{
	return {
		"Data":             
		  [             
		      {             
		       "code":"string",           
		       "sDepName":"string",           
		       "sInDepCode":"string",             
		       "sXMFName":"string",          
		       "sXMFCode":"string",            
		       "sXM":"string",           
		       "sXMCode":"string",           
		       "content":"string",            
		       "sXmName":"string",            
		       "sTaskName":"string",           
		       "sState":"string",           
		       "lTimeNum":"string",           
		       "lPercent":"string",            
		       "lXMPercent":"string",           
		       "sUrl":"string",        
		       "AutoCode":"string",         
		       "sMemo":"string",            
		       "dDate":"string",           
		      }
		  ]             
		   "Total":0,           
		   "Code":0,            
		   "Message":"string",             
		   "ErrorMessage":"string",         
	}
}