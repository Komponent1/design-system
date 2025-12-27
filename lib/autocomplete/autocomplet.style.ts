export const autocompleteContainerBaseStyle: React.CSSProperties = {
  position: 'relative',
};
export const dropdownBaseStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: '#ffffff',
  border: '1px solid #d1d5db',
  borderRadius: '4px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  maxHeight: '200px',
  overflowY: 'auto',
  zIndex: 10,
};
export const suggestionItemStyle: React.CSSProperties = {
  padding: '8px 12px',
  cursor: 'pointer',
  transition: 'background 0.15s',
};
