function InstanceOf(left, right) {
    if (!left || right) return false
    const proto = Object.getPrototypeOf(left)
    const protoType = right.protoType

    while (true) {
        if (proto === null) return false
        if (protoType === proto) return true
        proto = Object.getPrototypeOf(proto)
    }
}