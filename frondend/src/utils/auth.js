const AUTH_KEY = "vm_auth";
const TOKEN_KEY = "token";
const USER_KEY = "user";

/**
 * Store user authentication data after successful login/registration
 * @param {Object} params - { token, user }
 */
export function loginUser({ token, user }) {
  if (!token) {
    throw new Error("Token is required");
  }

  // Store token in localStorage (also used by API interceptor)
  localStorage.setItem(TOKEN_KEY, token);

  // Store user data
  const authData = {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  };

  localStorage.setItem(AUTH_KEY, JSON.stringify(authData));
  return authData;
}

/**
 * Logout user by clearing stored auth data
 */
export function logout() {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(TOKEN_KEY);
}

/**
 * Get stored authentication data
 * @returns {Object|null} Auth data or null if not authenticated
 */
export function getAuthData() {
  const rawData = localStorage.getItem(AUTH_KEY);
  return rawData ? JSON.parse(rawData) : null;
}

/**
 * Get stored token
 * @returns {string|null} JWT token or null
 */
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

/**
 * Check if user is authenticated
 * @returns {boolean} True if authenticated
 */
export function isAuthenticated() {
  return Boolean(getToken() && getAuthData());
}

/**
 * Get user role
 * @returns {string} User role (user, owner, admin)
 */
export function getRole() {
  return getAuthData()?.user?.role || "";
}

/**
 * Get user name
 * @returns {string} User name
 */
export function getUserName() {
  return getAuthData()?.user?.name || "Guest";
}

/**
 * Get user email
 * @returns {string} User email
 */
export function getUserEmail() {
  return getAuthData()?.user?.email || "";
}

/**
 * Get user ID
 * @returns {string} User ID
 */
export function getUserId() {
  return getAuthData()?.user?.id || "";
}

/**
 * Get home path based on user role
 * @param {string} role - User role
 * @returns {string} Home page path
 */
export function getHomePathByRole(role) {
  const homePaths = {
    user: "/user",
    owner: "/owner",
    admin: "/admin",
  };

  return homePaths[role] || "/";
}

/**
 * Login admin with email and password (local auth for admin)
 * @param {Object} params - { email, password }
 */
export function loginAdmin({ email, password }) {
  // Static admin credentials (for demo purposes)
  const ADMIN_CREDENTIALS = {
    email: "saravanan@gmail.com",
    password: "admin123",
    name: "Admin", 
  };

  if (
    email.trim().toLowerCase() !== ADMIN_CREDENTIALS.email ||
    password !== ADMIN_CREDENTIALS.password
  ) {
    throw new Error("Invalid admin email or password.");
  }

  const authData = {
    token: "admin-token-demo",
    user: {
      id: "admin-1",
      email: ADMIN_CREDENTIALS.email,
      role: "admin",
      name: ADMIN_CREDENTIALS.name,
    },
  };

  loginUser({
    token: authData.token,
    user: authData.user,
  });

  return authData;
}
