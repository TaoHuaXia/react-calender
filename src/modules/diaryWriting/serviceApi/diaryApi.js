import axios from 'axios'
/*根据条件查询项目表列表*/
export const wGetXmDaInfoMany = (keyWord, fXmCod) => {
	return  {             
			    "Data":       
			    [             
			      	{             
				       "AutoCode":0,           
				       "SXMCode":"string",            
				       "SXMName":"string",         
				       "SSpell1":"string",           
				       "SSpell2":"string",            
			      	}                        
			  	]             
			   "Total":0,           
			   "Code":0,            
			   "Message":"string",           
			   "ErrorMessage":"string",            
			}    
}
/*获取所有部门数据*/
export const getAllDeptData = (p_sDepCode, p_sZwCode, searchKey, pageIndex, pageSize)=>{
	return {             
			   "PageIndex":0,            
			   "PageSize":0,            
			   "TotalCount":0,          
			   "TotalPageCount":0,     
			   "HasNextPage":true,        
			   "HasPreviousPage":true,    
			   "Items":           
			    [             
			      {             
			       "FLUENTDATA_ROWNUMBER":0,    
			       "gwCode":"string",          
			       "lwage":"string",           
			       "sDepCode":"string",         
			       "sDepName":"string",          
			       "sGwName":"string",        
			      }           
			    ]             
			}   
}
/*获取职位列表*/
export const getGWDataByDepCode = (p_sDepCode, p_sZwCode, searchKey, pageIndex, pageSize)=>{
	return {
		"PageIndex":0,          
	   "PageSize":0,             
	   "TotalCount":0,        
	   "TotalPageCount":0,        
	   "HasNextPage":true,        
	   "HasPreviousPage":true,    
	   "Items":          
	    [             
	      {             
	       "FLUENTDATA_ROWNUMBER":0, 
	       "gwCode":"string",           
	       "lwage":"string",            
	       "sDepCode":"string",         
	       "sDepName":"string",         
	       "sGwName":"string",           
	      }             
	       
	    ]         
	}
}
/*根据条件查询任务日志列表*/
export const wGetYtaskNumberDsgList = (timeStart, timeEnd)=>{
	return {
		 "Data":            
		  [             
		      {             
		       "SXMNmae":"string",            
		       "DDate":"2007-01-01 12:23:47",           
		       "AutoCode":0,             
		       "STQDCode":"string",        
		       "STitle":"string",            
		       "SXMFCode":"string",          
		       "SXMCode":"string",             
		       "SInDepCode":"string",          
		       "LPercent":0.00,            
		       "LTimeNum":0.00,             
		       "STaskExplain":"string",       
		       "Items":           
		      [             
		          {             
		           "SItemCode":"string",           
		           "SItemsCode":"string",          
		           "SMemo":"string",         
		           "LTimeNum":0.00,          
		          } 
		      ]             
		      }                         
		  ]             
		   "Total":0,         
		   "Code":0,            
		   "Message":"string",            
		   "ErrorMessage":"string",           
	}
} 
/*根据编号获取任务日志*/
export const wGetYtaskNumberDsgInfo =(autoCode)=>{
	return {
		"Data":             
		    {             
		     "SXMNmae":"string",           
		     "DDate":"2007-01-01 12:23:47",         
		     "AutoCode":0,           
		     "STQDCode":"string",         
		     "STitle":"string",           
		     "SXMFCode":"string",           
		     "SXMCode":"string",           
		     "SInDepCode":"string",            
		     "LPercent":0.00,         
		     "LTimeNum":0.00,           
		     "STaskExplain":"string",           
		     "Items":       
		    [             
		        {             
		         "SItemCode":"string",           
		         "SItemsCode":"string",           
		         "SMemo":"string",        
		         "LTimeNum":0.00,         
		        }                      
		    ]             
		    }             
		   "Code":0,           
		   "Message":"string",            
		   "ErrorMessage":"string",           
	}
}
/*添加任务日志*/
export const wSaveYtaskNumberDsg =(taskLog)=>{
	return {
		"Data":0,          
	   "Code":0,            
	   "Message":"string",            
	   "ErrorMessage":"string",           
	}
}
/*编辑任务日志*/
export const wModifyYtaskNumberDsg  = (taskLog)=>{
	return {
		"Data":0,            
	   "Code":0,          
	   "Message":"string",           
	   "ErrorMessage":"string",          
	}
}
/*任务日志-删除*/
export const wDeleteYtaskNumberDsg =(id)=>{
	return {
		"Data":0,             
	   "Code":0,             
	   "Message":"string",           
	   "ErrorMessage":"string",           
	}
}