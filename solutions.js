function solution1(A, B, C)
{
  return Math.ceil((B-A)/C);
}

function solution2(A, B)
{
  var max = 0;
  for (var i=A; i<B; i++)
  {
    for (var j=i+1; j<=B; j++)
    {
      max = Math.max(max, i^j);
    }
  }
  return max;
}
