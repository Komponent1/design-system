export const baseTableStyle: React.CSSProperties = {
  borderCollapse: 'collapse',
  width: '100%',
};
export const baseThStyle: React.CSSProperties = {
  padding: '16px',
  textAlign: 'left',
};
export const baseTdStyle: React.CSSProperties = {
  padding: '16px',
};
export const getStripedRowStyle = (index: number): React.CSSProperties => ({
  backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white',
});
export const borderedTdStyle = {
  borderBottom: '1px solid #f2f2f2',
};
