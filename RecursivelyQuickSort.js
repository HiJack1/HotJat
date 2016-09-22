function quicksort(Item A, int p, int r)
{
 int q;
 if(p<r) {
 q = Partition(A,p,r);
 quicksort(A,p,q);
 quicksort(A,q+1,r);
 }
}

function int Partition(Item A[], int p, int r)
{
 Item t;
 int i= p-1;
 int j= r+1;
 Item x = A[p]; // pivot
 while(1) {
 while(A[--j]>x) ; // esce se A[j]<=x
 while(A[++i]<x) ; // esce se A[i]>=x
 if(i<j) {
 // scambia A[i] <-> A[j]
 t=A[i]; A[i]=A[j]; A[j]=t;
 }
 else break;
 }
 return j;
} 
