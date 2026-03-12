const vdom = {
  tag: "DIV",
  attrs: { id: "app" },
  children: [
    {
      tag: "SPAN",
      children: [{ tag: "A", children: [] }],
    },
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "A", children: [] },
      ],
    },
  ],
};

function JSONToDom(vdom) {
  const root = document.createElement(vdom.tag.toLowerCase());
  if (vnode.attrs) {
    for (let key in vnode.attrs) {
      el.setAttribute(key, vnode.attrs[key]);
    }
  }
  if (vdom.children) {
    for (const item of vdom.children) {
      root.appendChild(JSONToDom(vdom));
    }
  }

  return root;
}
