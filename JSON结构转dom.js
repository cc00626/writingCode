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

function render(vnode) {
  //创建dom标签
  const el = document.createElement(vnode.tag.toLowerCase());

  //给标签创建属性
  if (vnode.attrs) {
    for (let key in vnode.attrs) {
      el.setAttribute(key, vnode.attrs[key]);
    }
  }

  //创建儿子节点
  if (vnode.children) {
    vnode.children.forEach((child) => {
      el.appendChild(render(child));
    });
  }

  return el;
}

document.body.appendChild(render(vdom));
