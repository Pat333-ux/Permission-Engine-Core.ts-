export class PermissionEngine {
  constructor() {
    this.permissions = new Map();
  }

  grant(role, action) {
    if (!this.permissions.has(role)) {
      this.permissions.set(role, new Set());
    }
    this.permissions.get(role).add(action);
  }

  check(role, action) {
    const allowed = this.permissions.get(role);
    return allowed && allowed.has(action)
      ? { role, action, permitted: true }
      : { role, action, permitted: false };
  }

  list(role) {
    return this.permissions.get(role) || new Set();
  }
}
